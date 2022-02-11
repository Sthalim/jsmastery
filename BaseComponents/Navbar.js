import Link from 'next/Link';
import Image from 'next/image';


const Navbar = () => {
	return ( 
		<>
			<div className="container-fluid">
				<div className="row">
				<div className="col p-0 m-0">
					<nav className="navbar navbar-expand-lg navbar-light bg-light border border-top-0 border-start-0 border-end-0 border-primary border-3">						
						<div className="container-fluid">							
							<Link href="/"><a className="navbar-brand iconic_logo" >
								<h3>MONEX-LAB</h3>
								{/*<Image src="/logo1.jpg" alt="an images" width={ 35} height={35} />*/}
							</a></Link>					
							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse " id="navbarNavDropdown">
								
								<ul className="navbar-nav ">
									<li className="nav-item">
									<Link href="/"><a className="nav-link active" aria-current="page">Home</a></Link>
									</li>
									<li className="nav-item">
									<Link href="/portfolio"><a className="nav-link">PORTFOLIO</a></Link>
									</li>
									<li className="nav-item">
									<Link href="/blog"><a className="nav-link">BLOG</a></Link>
									</li>
									<li className="nav-item">
									<Link href="/pages"><a className="nav-link">PAGES</a></Link>
									</li>
									<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Courses
									</a>
									<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
										<li><Link href="/courses/docs"><a className="dropdown-item">Doc</a></Link></li>
										<li><Link href="/courses/student"><a className="dropdown-item">Student</a></Link></li>
										<li><Link href="/courses/course"><a className="dropdown-item">Courses</a></Link></li>
									</ul>
									</li>
								</ul>
							</div>
							<form className="d-flex">
								<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
								<button className="btn btn-outline-success" type="submit">Search</button>
							</form>							
						</div>
					</nav>				
				</div>
				</div>
			</div>
		</>
	);
}
 
export default Navbar;