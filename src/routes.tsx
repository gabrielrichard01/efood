import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Hioki from './pages/Hioki'
import Trattoria from './pages/Trattoria'
import Richards from './pages/Richards'
import Arabic from './pages/Arabic'
import ElMexican from './pages/ElMexican'
import China from './pages/China'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hioki" element={<Hioki />} />
    <Route path="/trattoria" element={<Trattoria />} />
    <Route path="/richards" element={<Richards />} />
    <Route path="/arabic" element={<Arabic />} />
    <Route path="/elmexican" element={<ElMexican />} />
    <Route path="/china" element={<China />} />
  </Routes>
)

export default Rotas
