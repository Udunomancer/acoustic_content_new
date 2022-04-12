import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
// import Material-UI components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
// Import custom components for article
import ArticleAside from "../../Components/ArticleAside/ArticleAside";
import ArticleBody from "../../Components/ArticleBody/ArticleBody";
import ArticleHeader from "../../Components/ArticleHeader/ArticleHeader";
import Loader from "../../Components/Loader/Loader";

function Article() {
  let { tenant, article } = useParams();
  // @DevScript - Temporary extra logic to allow Article to act as main page
  if (tenant === undefined && article === undefined) {
    tenant = "859f2008-a40a-4b92-afd0-24bb44d10124";
    article = "db4930e9-7504-4d9d-ae6c-33facca754d1";
  }
  // @DevScript

  // State hook to store retrieved article data
  const [articleLoaded, setArticleLoaded] = useState(false);
  const [articleLoadError, setArticleLoadError] = useState(false);
  const [heading, setHeading] = useState();
  const [author, setAuthor] = useState();
  const [date, setDate] = useState();
  const [mainImg, setMainImg] = useState();
  const [body, setBody] = useState();

  // Effect hook to retrieve article data on initial render
  useEffect(() => {
    async function getArticleData() {
      setArticleLoaded(false);
      setArticleLoadError(false);

      const domain = "https://content-eu-4.content-cms.com/api/";
      const endpoint = "/delivery/v1/content/";
      const ApiURL = `${domain}${tenant}${endpoint}${article}`;

      try {
        const response = await axios.get(ApiURL);

        console.log(response);
        const domain = `https://content-eu-4.content-cms.com/api/${tenant}`;
        const imgURL =
          response.data.elements.mainImage.value.leadImage.renditions.lead
            .source;

        setHeading(response.data.elements.heading.value);
        setAuthor(response.data.elements.author.value);
        setDate(response.data.elements.date.value);
        setMainImg(domain + imgURL);
        setBody(response.data.elements.body.values);
      } catch (error) {
        setArticleLoadError(true);
      }

      setArticleLoaded(true);
    }

    getArticleData(tenant, article);
  }, [article, tenant]);

  if (articleLoadError) {
    return <Redirect to="/error" />;
  } else {
    return (
      <>
        {articleLoaded ? (
          <Box pt={1}>
            <ArticleHeader
              heading={heading}
              author={author}
              date={date}
              mainImage={mainImg}
            />
            <Grid container>
              <Grid item xs={12} lg={8}>
                <ArticleBody body={body} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <ArticleAside />
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default Article;
