# Image Gallery with LightBox Effect

 Created the app with Vite.

 # Features

 - Image Gallery consisting of image cards.
 - On clicking of an image, opens a modal.
 - Modal contains the image having complete width.
 - Modal has close button and buttons to go to previous and next images.

 # Approach

 - Created a utility file which serves image addresses and imported it into App.
 - Mapped through all the images and rendered it on the page as a card.
 - On clicking the image, opened modal by using state variable and setting image index value.
 - In the modal displayed image and positioned close,next,prev buttons absolute.
 - On clicking of close button, modified state variable and hence will come back to the Gallery.
 - On clicking prev and next buttons, modified image indexes to show other images.
 - Added responsiveness by adding breakpoint tailwind css classes.

