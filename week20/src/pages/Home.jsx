import React from 'react';
import BaseButton from '../components/button/BaseButton';
import walkTheDog from './../assets/walk_the_dog.svg';
import css from './Home.module.css';

export default function Home() {
  console.log({walkTheDog});
  return (

    <section className={css.section}>

      <img src={walkTheDog} alt="dog"/>


      <div>
        <h1>Hey There!</h1>
        <p>Welcome to walk the dog. </p>

        <div>
          <BaseButton>Get Started</BaseButton>
          <BaseButton>Sign up</BaseButton>

        </div>

      </div>




    </section>
  )
}
