import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: 'rgb(124, 148, 124)',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
 
  exploreZivri:'../pages/ExploreZivri.jsx'
});

export default state;