import React from 'react'
import "./SearchPage.css"
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch.jsx';
import Response from "./response.jsx";
import { Link } from 'react-router-dom';
import Search from './pages/Search.jsx';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function SearchPage() {
    const [{term="tesla"}, dispatch] = useStateValue();

    //Live API CALL
    const {data} = useGoogleSearch(term);

    // const data = Response;

    //https://developers.google.com/custom-search/v1/using_rest

    //https://cse.google.com/cse/create/new
    console.log(data);

  return (
    <div className='searchPage'>
        <div className="searchPage__header">
          <Link to="/">
       <img className='searchPage__logo' src="https://cdn.telanganatoday.com/wp-content/uploads/2022/04/Google-multisearch-tool-to-help-users-search-with-photos.jpg" alt="google" />     
       </Link>
       <div className="searchPage__headerBody">
        <Search hideButtons/>
        <div className="searchPage__options">
          <div className="searchPage__options">
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>
            <div className="searchPage__option">
              <DescriptionIcon />
              <Link to="/all">News</Link>
            </div>
            <div className="searchPage__option">
              <ImageIcon />
              <Link to="/all">Images</Link>
            </div>
            <div className="searchPage__option">
              <LocalOfferIcon />
              <Link to="/all">Shopping</Link>
            </div>
            <div className="searchPage__option">
              <RoomIcon />
              <Link to="/all">maps</Link>
            </div>
            <div className="searchPage__option">
              <MoreVertIcon />
              <Link to="/all">more</Link>
            </div>
          </div>
          <div className="searchPage__optionRight">
            <div className="searchPage__option">
              <Link to="/settings">Settings</Link>
              <Link to="/tools">tools</Link>
            </div>
            {/* <div className="searchPage__option">

            </div> */}
          </div>
        </div>
       </div>
        </div>
        {true && (
 <div className="searchPage__results">
 <p className="searchPage__resultCount">
   About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}.
 </p>
 {data?.items.map(item => (
   <div className='searchPage__resultLink' key={item.link}>
     <a href={item.link}>
       {item.pagemap?.cse_image?.length > 0 && (
         <img
           className='searchPage__resultImage'
           src={
             item.pagemap?.cse_image[0]?.src // Corrected access to cse_image
           }
           alt='image'
         />
       )}
       {item.displayLink} 🍏
     </a>
     <a className="searchPage__resultTitle" href={item.link}>
       <h2>{item.title}</h2>
     </a>
     <p className="searchPage__resultSnippet">
       {item.snippet}
     </p>
     {/* Assuming item.displayLink contains the link text */}
   </div>
 ))}
</div>

)}

    </div>
  )
}

export default SearchPage
