import {mount as landingMount} from 'landing/LandingIndex';
import { mount as loginMount } from 'login/LoginIndex';

console.log('Container!');

loginMount(document.querySelector('.login'));
landingMount(document.querySelector('.landing'))