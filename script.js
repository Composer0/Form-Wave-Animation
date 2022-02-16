const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})


// split turns the text into an array.
// map to separate each letter into its own span
// turning it back into a string after the fact.


// why doesn't my code.  It didn't work because you forget > after the final span.  </span>