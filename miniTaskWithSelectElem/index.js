'use strict'

const selected = genres.options[genres.selectedIndex]
console.log(`${selected.value}:${selected.text}`)

const option = new Option('Классика', 'classic', true, true)
genres.append(option)