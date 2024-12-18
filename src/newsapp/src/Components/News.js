
  import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'



export class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 10,
    category: 'general', 
  };
  
  static propTypes = {
    country: PropTypes.string, 
    pagesize: PropTypes.number, 
    category: PropTypes.string,   
  };

   capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1, // Initialize the page state
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    const { page } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=54298b4b1aeb4490a381942d6ffc151d&page=${page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true }); // Optional: Show loading while fetching
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults:parsedData.totalResults ,
      loading: false, // Optional: Hide loading after fetching
    });
  };

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      this.fetchNews // Fetch news after updating the page
    );
  };

  handleNextClick = async () => {
  if (this.state.page +1 > Math.ceil(this.state.totalResults/20)){

  } 
  else{
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      this.fetchNews // Fetch news after updating the page
    );}
  };  


  render() {
    
    return (
      <>  

      <div className="container my-2">
        <h2 className="text-center"style={{margin:'35px 0px'}}>NewsMonkey -- Top  &nbsp;
         {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h2>
        {this.state.loading &&<Spinner />}
        <div className="row">
          {this.state.articles && this.state.articles.length > 0 ? (
           !this.state.loading && this.state.articles.map((element, index) => (
              <div className="col-md-3 my-3" key={index}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 56) : ""}
                  description={element.description}
                  imageurl={element.urlToImage}
                  newsUrl={element.url} author={element.author} date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))
          ) : (
            <p>No articles to display or loading...</p>
          )}
        </div>
      </div>
      <div className="container d-flex justify-content-between">
        <button
          disabled={this.state.page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={this.handlePrevClick}
        >
          &larr; Previous
        </button>
        <button 
          type="button"
          className="btn btn-dark"
          onClick={this.handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
      </>
    );
  }
}

export default News;
