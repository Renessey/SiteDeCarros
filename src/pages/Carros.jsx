import { useState, useEffect } from 'react';
import './Carros.css';

export default function Carros() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ origin: '', year: '', make: '', model: '' });
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [origins, setOrigins] = useState(['Brazilian', 'American', 'European', 'Chinese', 'Australian']);
  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    if (filters.make) {
      const filteredModels = [...new Set(cars.filter(car => car.make === filters.make).map(car => car.model))].sort();
      setModels(filteredModels);
    } else {
      setModels([]);
    }
  }, [filters.make, cars]);

  useEffect(() => {
    applyFilters();
  }, [cars, searchTerm, filters]);

  const fetchCars = async () => {
    try {
      const response = await fetch('/cars.json');
      const data = await response.json();
      setCars(data);
      const uniqueYears = [...new Set(data.map(car => car.year))].sort((a, b) => b - a);
      setYears(uniqueYears);
      const uniqueMakes = [...new Set(data.map(car => car.make))].sort();
      setMakes(uniqueMakes);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cars:', error);
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = cars;

    if (searchTerm) {
      filtered = filtered.filter(car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.origin) {
      filtered = filtered.filter(car => car.origin === filters.origin);
    }

    if (filters.year) {
      filtered = filtered.filter(car => car.year === parseInt(filters.year));
    }

    if (filters.make) {
      filtered = filtered.filter(car => car.make === filters.make);
    }

    if (filters.model) {
      filtered = filtered.filter(car => car.model === filters.model);
    }

    setFilteredCars(filtered);
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const getCarImage = (car) => {
    const query = car.make ? `${car.make} ${car.name}` : car.name;
    return `https://source.unsplash.com/featured/?${encodeURIComponent(query)}&w=300&h=200`;
  };

  return (
    <div className="carros-page">
      <h1>🚘 Nossos Carros</h1>
      <p>Veja os modelos disponíveis e descubra o que combina com você.</p>

      <div className="search-filters">
        <input
          type="text"
          placeholder="Buscar carros..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        <select value={filters.origin} onChange={(e) => handleFilterChange('origin', e.target.value)} className="filter-select">
          <option value="">Todas as Origens</option>
          {origins.map(origin => (
            <option key={origin} value={origin}>{origin}</option>
          ))}
        </select>

        <select value={filters.year} onChange={(e) => handleFilterChange('year', e.target.value)} className="filter-select">
          <option value="">Todos os Anos</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <select value={filters.make} onChange={(e) => handleFilterChange('make', e.target.value)} className="filter-select">
          <option value="">Todas as Marcas</option>
          {makes.map(make => (
            <option key={make} value={make}>{make}</option>
          ))}
        </select>

        <select value={filters.model} onChange={(e) => handleFilterChange('model', e.target.value)} className="filter-select">
          <option value="">Todos os Modelos</option>
          {models.map(model => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>


      </div>

      {loading ? (
        <p>Carregando carros...</p>
      ) : (
        <div className="cars-grid">
          {filteredCars.slice(0, 20).map(car => (
            <div key={car.id} className="car-card">
              <h3>{car.name}</h3>
              <p>Ano: {car.year}</p>
              <p>Origem: {car.origin}</p>
              <button style={{border: 'none', padding: '0.5rem'}} className='button' onClick={() => { setSelectedCar(car); setModalOpen(true); }}>
                Mostrar Detalhes
              </button>
            </div>
          ))}
        </div>
      )}

      {modalOpen && selectedCar && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCar.name}</h2>
            <p>Ano: {selectedCar.year}</p>
            <p>Origem: {selectedCar.origin}</p>
            <p>{selectedCar.details}</p>
            <p>Média de preço: {selectedCar.price.toFixed(2)}</p>
            <button onClick={() => setModalOpen(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
