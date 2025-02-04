// components/ClientScript.js
"use client";

import { useEffect } from "react";

export default function ClientScript() {
  useEffect(() => {
    const navbar = document.querySelector('.header .flex .navbar');

    document.querySelector('#menu-btn').onclick = () => {
      navbar.classList.toggle('active');
    };

    const account = document.querySelector('.user-account');
    document.querySelector('#user-btn').onclick = () => {
      account.classList.add('active');
    };
    document.querySelector('#close-account').onclick = () => {
      account.classList.remove('active');
    };

    const myOrders = document.querySelector('.my-orders');
    document.querySelector('#order-btn').onclick = () => {
      myOrders.classList.add('active');
    };
    document.querySelector('#close-orders').onclick = () => {
      myOrders.classList.remove('active');
    };

    const cart = document.querySelector('.shopping-cart');
    document.querySelector('#cart-btn').onclick = () => {
      cart.classList.add('active');
    };
    document.querySelector('#close-cart').onclick = () => {
      cart.classList.remove('active');
    };

    window.onscroll = () => {
      navbar.classList.remove('active');
      myOrders.classList.remove('active');
      cart.classList.remove('active');
    };

    let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
    let index = 0;

    window.next = function next() {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    };

    window.prev = function prev() {
      slides[index].classList.remove('active');
      index = (index - 1 + slides.length) % slides.length;
      slides[index].classList.add('active');
    };

    const accordion = document.querySelectorAll('.faq .accordion-container .accordion');
    accordion.forEach(acco => {
      acco.onclick = () => {
        accordion.forEach(remove => remove.classList.remove('active'));
        acco.classList.add('active');
      };
    });
  }, []);

  return null;
}
