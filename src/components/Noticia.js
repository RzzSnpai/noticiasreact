import React from 'react';
import PropTypes from 'prop-types';

const Noticia = (props) => {

    const {urlToImage,url, title, description, source}= props.noticia;
    /* si la imagen es muy grande no funciona este codigo */
    const imagen=(urlToImage)
    ?
    <div className="card-image">
        <img src={urlToImage} />
        <span className="card-title">
            {source.name}
        </span>    
    </div>
    : "";
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="blank" className="waves-effects waves-light btn">Leer más</a>
                </div>
            </div>
        
        </div>
    );
};
Noticia.propTypes= {
    noticia: PropTypes.shape({
        urlToImage:PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        source: PropTypes.object

    })
}
export default Noticia;