import { useRouter } from 'next/router';
import paises from '@/../paises.json';

export default function Home() {
  const router = useRouter();

  const pais = paises.find((e) => e.title == router.query.title);

  return (
    <div>
      <h1>{pais ? pais.about : <>LOADING</>}</h1>

      <div>
        {pais ? (
          pais.curiosities.map((curiosity, index) => (
            <div key={index}>
              <h2>{curiosity.topic}</h2>
              <p>{curiosity.description}</p>
            </div>
          ))
        ) : (
          <>LOADING</>
        )}
      </div>

      <h2>Must visit places:</h2>
      <h3>{pais ? pais.must_visit_places : <>LOADING</>}</h3>
      <h3>{pais ? pais.tags : <>LOADING</>}</h3>
    </div>
  );
}
