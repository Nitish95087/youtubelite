import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Header,Feed,VideoDetail,SearchResult,ChannelSection} from './components'
import { AppContext } from './context/contextApi'

const App = () => {
  return (
    <AppContext>
    <BrowserRouter>
      <Header/>
      <Routes>
       <Route path='/' exact element={<Feed/>}/>
       <Route path='/video/:id' element={<VideoDetail/>}/>
       <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
       <Route path='/channel/:channelId' element={<ChannelSection/>}/>
      </Routes>
    </BrowserRouter>
    </AppContext>
  )
}

export default App