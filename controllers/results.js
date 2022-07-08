// Import Packages
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const Results = require('../models/results')

// Create POST controller

router.get('/', (req, res) => {
    res.render('results')
})
router.post('/', async(req, res) => {    
    console.log(req.body.searchTerm)
    let resultsNew = await Results.find({title: req.body.searchTerm})
    console.log(resultsNew);
    res.render("results", {results: resultsNew} )
})
// ^^^ render where and what 
    // let results = [
    //     {
    //         title: 'JavaScript Tutorial - W3School',
    //         description: 'Well organized and easy to understand Web building tutorials with lots of examples of how',
    //         url: 'https://www.w3schools.com',
    //         links: [
    //           {
    //             title: 'JavaScript Introduction',
    //             url: 'https://www.w3schools.com/js/js_intro.asp'
    //           }, {
    //             title: 'JS Functions',
    //             url: 'https://www.w3schools.com/js/js_functions.asp'
    //           },
    //           {
    //             title: 'JS for the Web',
    //             url: 'https://www.w3schools.com/js'
    //           }
    //         ]
    //       },
    //       {
    //         title: 'JavaScript | MDN',
    //         description: 'JavaScript(JS) is a lightweight, interpreted, or just-in-time, compliled programming language with first-class functions',
    //         url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    //         links: [
    //           {
    //             title: 'JavaScript Operator',
    //             url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators'
    //           }, {
    //             title: 'JavaScript Code',
    //             url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting'
    //           },
    //           {
    //             title: 'JavaScript Meaning',
    //             url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    //           }
    //         ]
    //       },
    //       {
    //         title: 'JavaScript - Wikipedia',
    //         description: 'The best JavaScript tutorials in the galaxy!',
    //         url: 'https://www.w3schools.com',
    //         links: [
    //           {
    //             title: 'JS for Beginners',
    //             url: 'https://www.w3schools.com/js'
    //           }, {
    //             title: 'JS for the Web',
    //             url: 'https://www.w3schools.com/js'
    //           },
    //           {
    //             title: 'JS for the Web',
    //             url: 'https://www.w3schools.com/js'
    //           }
    //         ]
    //       }
    // ]
//     //filters the search result based on the hard coded data within the description for now
//     results = results.filter(e => e.description.includes(req.body.searchTerm))
//     console.log(req.body.searchTerm)
//     res.render('results', {results})

// })



  
// Export module
module.exports = router

{/* <div class="result-list">
      <small>37 Results</small>      
      <div class="resultTemplate">
        <small class="url">www.w3school.com</small>
        <h2>
          <a href="https://www.w3schools.com/js/">JavaScript Tutorial - W3School</a>
        </h2>
        <p>
          Well organized and easy to understand Web building tutorials with lots
          of examples of how...
        </p>
        <ul>
          <li>
            <a href="https://www.w3schools.com/js/js_intro.asp"
              >JavaScript Introduction</a>
          </li>
          <li>
            <a href="https://www.w3schools.com/js/js_functions.asp"
              >JS Functions</a>
          </li>
          <li>
            <a href="https://www.w3schools.com/js/js_examples.asp"
              >JavaScript Introduction</a>
          </li>
        </ul>
      </div>
      <div class="resultTemplate">
        <small class="url">developer.mozilla.org</small>
        <h2>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >JavaScript | MDN</a
          >
        </h2>
        <p>
          JavaScript(JS) is a lightweight, interpreted, or just-in-time, compliled
          programming language with first-class functions...
        </p>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators"
              >JavaScript Operator</a
            >
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting"
              >JavaScript Code</a
            >
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              >JavaScript Meaning</a
            >
          </li>
        </ul>
      </div>  
      <div class="resultTemplate">
        <small class="url">e.wikipedia.org</small>
        <h2>
          <a href="https://en.wikipedia.org/wiki/JavaScript"
            >JavaScript - Wikipedia</a
          >
        </h2>
        <p>
          JavaScript often abbreviated as JS, is a is a programming language that
          is one of the core technologies of the World Wide Web, alongside HTML
          and CSS.
        </p>
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/JavaScript#JSON"
              >JavaScript Online</a
            >
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/JavaScript"
              >JavaScript Definition</a
            >
          </li>
        </ul>
      </div>
    </div> */}