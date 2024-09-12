import { useEffect, useState } from "react";
import axios from 'axios';

const DataFetching = () => {
  // const [recipes, setRecipes] = useState([]);
  const [topics, setTopics] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const topicPromise = axios.get('/api/topics');
    const photoPromise = axios.get('/api/photos');

    const promises = [photoPromise, topicPromise];

    Promise.all(promises)
      .then((responseArray) => {
        console.log(responseArray);

        const photos = responseArray[0].data;
        const topics = responseArray[1].data;

        setPhotos(photos);
        setTopics(topics);
      })
      .catch(() => {})
  }, []);

  // useEffect(() => {
  //   axios.get('https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes')
  //     .then((response) => {
  //       console.log(response.data);
  //       setRecipes(response.data);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch('https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes')
  //     .then((res) => { return res.json() })
  //     .then((response) => {
  //       console.log(response);
  //       setRecipes(response);
  //     });
  // }, []);

  // const mappedRecipes = recipes.map((recipe) => {
  //   return <p key={recipe.id}>{recipe.title}</p>
  // });

  const mappedTopics = topics.map((topic) => {
    return <p key={topic.id}>Topic: {topic.title}</p>
  });

  return (
    <div>
      <h2>Data Fetching!</h2>
      <h2>Num photos: {photos.length}</h2>
      {/* { mappedRecipes } */}
      { mappedTopics }
    </div>
  );
};

export default DataFetching;
