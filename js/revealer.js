
window.openRevealerHorizontal = function(revealer) 
{
    var isOverlay = revealer.classList.contains('revealer-is-overlay');
    var drawer = !isOverlay ? revealer : revealer.querySelector(':scope .revealer-inner');
    var content = revealer.querySelector(':scope .revealer-content');
    revealer.classList.add('revealer-is-open');
    revealer.classList.remove('revealer-is-closed');

    drawer.style.width = '0px';

    setTimeout(() => 
    {
        drawer.style.width = content.offsetWidth+'px';

        setTimeout(() => 
        {
            drawer.style.width = 'auto';
        }, 500);

    }, 50);
}

window.closeRevealerHorizontal = function(revealer) 
{
    var isOverlay = revealer.classList.contains('revealer-is-overlay');
    var drawer = !isOverlay ? revealer : revealer.querySelector(':scope .revealer-inner');
    var content = revealer.querySelector(':scope .revealer-content');
    revealer.classList.remove('revealer-is-open');
    revealer.classList.add('revealer-is-closed');

    drawer.style.width = content.offsetWidth+'px';

    setTimeout(() => 
    {
        drawer.style.width = '0px';
    }, 50);
}

window.openRevealerVertical = function(revealer) 
{
    var isOverlay = revealer.classList.contains('revealer-is-overlay');
    var drawer = !isOverlay ? revealer : revealer.querySelector(':scope .revealer-inner');
    var content = revealer.querySelector(':scope .revealer-content');
    revealer.classList.add('revealer-is-open');
    revealer.classList.remove('revealer-is-closed');

    drawer.style.height = '0px';

    setTimeout(() => 
    {
        drawer.style.height = content.offsetHeight+'px';

        setTimeout(() => 
        {
            drawer.style.height = 'auto';
        }, 500);

    }, 50);
}

window.closeRevealerVertical = function(revealer) 
{
    var isOverlay = revealer.classList.contains('revealer-is-overlay');
    var drawer = !isOverlay ? revealer : revealer.querySelector(':scope .revealer-inner');
    var content = revealer.querySelector(':scope .revealer-content');
    revealer.classList.remove('revealer-is-open');
    revealer.classList.add('revealer-is-closed');

    drawer.style.height = content.offsetHeight+'px';

    setTimeout(() => 
    {
        drawer.style.height = '0px';
    }, 50);
}

window.openRevealer = function(revealer) 
{
    revealer.classList.contains('revealer-horizontal') ? 
        openRevealerHorizontal(revealer) : 
        openRevealerVertical(revealer);
}

window.closeRevealer = function(revealer) 
{
    revealer.classList.contains('revealer-horizontal') ? 
        closeRevealerHorizontal(revealer) : 
        closeRevealerVertical(revealer);
}

window.toggleRevealer = function(revealer) 
{
    revealer.classList.contains('revealer-is-closed') ? 
        openRevealer(revealer) : 
        closeRevealer(revealer);
}
