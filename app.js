/*
2022/05/13
John Jamieson
*/

'use strict';

const switcher = document.querySelector('.mode');

switcher.addEventListener('click', function()
{
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className === "light-theme")
    {
        this.textContent = "Dark";
    }
    else
    {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});