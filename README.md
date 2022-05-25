# Infinity Scroll Project Overview
The goal of this project is to learn how to implement infinite scroll functionality. This is something that happens on social media as the user scrolls near the bottom of the page, another network request is made, but it happens before you reach the bottom so it feels like you are seamlessly scrolling forever. 

**Link to project:** http://recruiters-love-seeing-live-demos.com/

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Unsplash Image API

The immages are photos fetched from the unsplash image API and we are tracking the moment all the images are loaded in order to dynamically hide our loading animation. It is one long column of images with a margin on the left and right. As we scroll closer to the bottom, if you watch the scroll bar on the right, you are going to see it jump up when the next network request is made and we are fetching more images to give a totally seamless experiance. 

If we hover over an image we can see a description and if we click on the image we can see that image on the unsplah website so that we can see the author or download the photo if we want. Lastly, if we open up our dev tools, we can see it is mobile responsive as well, so instead of having big margin on the left and right in a mobile device, we just have a 10 pixel margin all the way around to so that it will look great on mobile as well. 

Here's where you can go to town on how you actually built this thing. Write as much as you can here, it's totally fine if it's not too much just make sure you write *something*. If you don't have too much experience on your resume working on the front end that's totally fine. This is where you can really show off your passion and make up for that ten fold.

## Optimizations
*(optional)*

You don't have to include this section but interviewers *love* that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

**Creating custom animated loading icon** using a website called Loading.io. They have a very easy to use interface where you can adjust a number of different settings and output in a number of different formats using the free or paid options provided. This is a great opportunity to add my own personal style to any project like a custom color theme that matches a certain brand. Eventually, I can download the custom image as an animated SVG image. SVG uses coordinates in 2D space to create lines and shapes with the main benefit being that the file sizes are smaller and I can make an SVG any size and it would look just as sharp when we zoom.


**Using Unsplash API** to set up the functionality of our project which allows us to return high quality random images and that will allow us to showcase our infinite scroll functionality.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Palettable:** https://github.com/alecortega/palettable

**Twitter Battle:** https://github.com/alecortega/twitter-battle

**Patch Panel:** https://github.com/alecortega/patch-panel



