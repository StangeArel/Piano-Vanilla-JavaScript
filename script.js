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

