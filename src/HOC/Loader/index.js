import React from 'react'
import './loaderHOC.css'

const LoaderHOC = (WrappedComponent) => (props)  => {
	return props.loading ? (<div className='loader'></div>) : <WrappedComponent {...props} />
}

export default LoaderHOC