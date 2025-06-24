"use strict"

/**
 * Alle Tasten-Elemente, die eine Klasse .key haben
 * @type {NodeListOf<Element>}
 */
const keys = document.querySelectorAll(".key");

/**
 * Das Element, das den aktuell gespielten Notennamen anzeigt
 * @type {Element}
 */
const note = document.querySelector(".nowplaying");

/**
 * Alle Elemente mit der Klasse .hints – zeigen Hinweistexte auf den Tasten
 * @type {NodeListOf<Element>}
 */
const hints = document.querySelectorAll(".hints");

function playNote(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!key) return;

    const keyNote = key.getAttribute("data-note");

    key.classList.add("playing");
    note.innerHTML = keyNote;
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

