
import { BoxColumn } from "../box/Box";
import Section from "../section/Section";



function BodyView() {



  const apiKey = '2b6bb127';
  const searchTerm = 'spider man';
  
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&language=pt`)
    .then(response => response.json())
    .then(data => {
      // Aqui você pode manipular os dados retornados pela API
      console.log(data);
    })
    .catch(error => {
      // Em caso de erro na solicitação
      console.error('Ocorreu um erro:', error);
    });

 
  return (
    <Section>
     <BoxColumn>

     </BoxColumn>
    </Section>
  );
}

export default BodyView;
