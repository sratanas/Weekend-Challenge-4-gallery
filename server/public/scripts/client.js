var app = angular.module('GalleryApp', []);

app.controller('GalleryController', ['$http', function($http){ // brought in $http as a dependency
    console.log('Gallery Controller has been loaded');
    var self = this;



self.photoArray = [
    {
        url:'images/yirgy_bw.jpg',
        description: 'My old dog yirgy. He was my first dog and very important to me. Yirgy taught me a lot about life.'
        
    },
    {
        url:'images/sarah_adriatic.jpg',
        description: 'My partner, Sarah. My favorite person.'
    },
    {
        url:'images/kevin_winter_porch.jpg',
        description: 'Kevin is a doofus dog but we love him very much. Also, quite handsome.'
    },
    {
        url: 'images/lake-superior.jpg',
        description: 'Lake superior, reminds me of the vastness of the world.'
    },
    {
        url:'images/gooseberry.jpg',
        description: 'Gooseberry Falls. I go up north at least once a year to camp for three or four days with the dog. It is a very healing experience for me.'
    },
    {
        url: 'images/korcula.jpg',
        description:'This is from Korcula, and island off the Croatian coast. Travel is important to me and I hope to be able to to more of it again in the future.'
    }
]





self.countClicks = function(){
    var clicks = 0;
    clicks++;
    console.log('clicks');
    
}



self.getImageDescription = function(image){
    image.visible = image.visable ? false : true;
    
}
}]);