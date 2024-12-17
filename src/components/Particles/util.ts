// @link https://particles.js.org/
// @link https://github.com/tsparticles/react
import configs from './configs';

export const particleConfMap = configs;

export const particleConfOpt = Object.keys(configs).map((key) => ({ label: key.toUpperCase(), value: key, }));
