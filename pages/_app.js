import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../styles/globals.scss';
//import '../styles/Home.module.scss';
import '../styles/custom.scss'
import Layout from '../BaseComponents/layout';





function MyApp( { Component, pageProps } ) {
	useEffect( () => {
		import('bootstrap/dist/js/bootstrap.bundle')
	}, [])
	

	return (  
		<>
			<Layout>
				<Component { ...pageProps }/>
			</Layout>
		</>
	);
}
 
export default MyApp;