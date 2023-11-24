import { createSlice } from '@reduxjs/toolkit';
import automotivoThumb from 'assets/categories/thumbnail/automotivo.png';
import eletronicosThumb from 'assets/categories/thumbnail/eletronicos.png';
import escritorioThumb from 'assets/categories/thumbnail/escritorio.png';
import jogosThumb from 'assets/categories/thumbnail/jogos.png';
import somThumb from 'assets/categories/thumbnail/som.png';
import automotivoHeader from 'assets/categories/header/automotivo.png';
import eletronicosHeader from 'assets/categories/header/eletronicos.png';
import escritorioHeader from 'assets/categories/header/escritorio.png';
import jogosHeader from 'assets/categories/header/jogos.png';
import somHeader from 'assets/categories/header/som.png';

const initialState = [{
  name: 'Eletrônicos',
  thumbnail: eletronicosThumb,
  header: eletronicosHeader,
  id: 'eletronicos',
  description: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui!'
}, {
  name: 'Automotivo',
  thumbnail: automotivoThumb,
  header: automotivoHeader,
  id: 'automotivos',
  description: 'Encontre aqui equipamentos para deixar seu carro com a sua cara!'
}, {
  name: 'Jogos',
  thumbnail: jogosThumb,
  header: jogosHeader,
  id: 'jogos',
  description: 'Adquira os consoles e jogos mais atuais do mercado !'
}, {
  name: 'Escritório',
  thumbnail: escritorioThumb,
  header: escritorioHeader,
  id: 'escritorio',
  description: 'Tudo para o que escritório ficar incrível!'
}, {
  name: 'Som e imagem',
  thumbnail: somThumb,
  header: somHeader,
  id: 'som',
  description: 'Curta suas músicas e seus filmes com a melhor qualidade!'
}];

const categoriasSlice = createSlice({
  name: 'categories',
  initialState,
});

export default categoriasSlice.reducer;