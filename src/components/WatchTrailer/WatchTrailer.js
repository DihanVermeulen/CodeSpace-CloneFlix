import './WatchTrailer.css';
export const WatchTrailer = () => {

    const closeTrailer = () => {
        document.querySelector('#watchtrailer iframe').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        document.querySelector('#watchtrailer').style.display = 'none';
    };

    return (
        <article id='watchtrailer'>
            <div onClick={closeTrailer} className='watchtrailer-close_button'>X</div>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
                title="YouTube video player" frameBorder="0" allow="autoplay"
                allowFullScreen
            >
            </iframe>
        </article>
    )
}
