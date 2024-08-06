// components/AboutUs.js
import React from 'react';
import { Typography, Box } from '@mui/material';

function AboutUs() {
  return (
    <Box sx={{ mt: 3, px: 2 }}>
      <Typography variant="h4" gutterBottom align="center">
        About Us
      </Typography>
      <Typography variant="body1">
        Gilgit-Baltistan, formerly known as the Northern Areas, is a region administered by Pakistan as an administrative
        territory and constitutes the northern portion of the larger Kashmir region, which has been the subject of a
        longstanding dispute between India and Pakistan since 1947. It is the northernmost territory administered by Pakistan.
        This scenic region is renowned for its breathtaking landscapes, including towering mountain ranges, serene lakes, and
        lush valleys. Among its many geographical features are some of the world's highest peaks, such as K2, the second highest
        mountain on Earth, and Nanga Parbat, both of which attract climbers and adventure enthusiasts from around the globe.
        
        The diverse geography of Gilgit-Baltistan encompasses everything from arid deserts to icy glaciers, creating a variety of
        environments and outdoor activities for visitors. The region offers an array of adventure tourism opportunities, including
        trekking, mountaineering, and river rafting. In addition to its natural beauty, Gilgit-Baltistan has a rich cultural heritage,
        with a mix of ethnic groups including the Shins, Balti, and Burusho peoples. Each group contributes to the region's vibrant
        cultural tapestry, celebrated through festivals, traditional music, and artisanal crafts.
        
        The historical significance of Gilgit-Baltistan is profound, with ancient trade routes like the Silk Road traversing the
        region and connecting it to Central Asia and beyond. This historical context adds depth to the area's cultural and economic
        landscape, underscoring its role as a crossroads of civilizations. The region's strategic location has made it an area of
        interest for various historical empires and modern geopolitical dynamics.
        
        Today, Gilgit-Baltistan is a vital area for tourism, agriculture, and hydropower development. Its natural beauty and cultural
        richness continue to draw researchers, mountaineers, and nature enthusiasts from around the world. The region's unique blend
        of adventure and cultural experiences makes it an attractive destination for those seeking both thrilling activities and
        meaningful cultural encounters.
        
       
      </Typography>
    </Box>
  );
}

export default AboutUs;
