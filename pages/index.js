import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
        quasi incidunt distinctio provident iure corrupti molestiae quidem
        similique, temporibus, deleniti expedita ex enim? Pariatur ex eum
        laborum obcaecati eaque soluta.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
        quasi incidunt distinctio provident iure corrupti molestiae quidem
        similique, temporibus, deleniti expedita ex enim? Pariatur ex eum
        laborum obcaecati eaque soluta.
      </p>
      <Footer />
    </div>
  );
}
