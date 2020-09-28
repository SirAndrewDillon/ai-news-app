import React from 'react'
import {Grid, Row, Typography} from '@material-ui/core'

const NewsCards = ({ articles }) => {
    return (
        <div>
            {articles.map((article, i) => {
                <NewsCard />
            })}
        </div>
    )
}

export default NewsCards
