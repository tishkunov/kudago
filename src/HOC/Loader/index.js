import React from 'react'
import './loaderHOC.css'


// Loader HOC , при запросе к API выводится loader
const LoaderHOC = (WrappedComponent) => (props)  => {
	return props.loading ? (<div className='loader'></div>) : <WrappedComponent {...props} />
}

export default LoaderHOC