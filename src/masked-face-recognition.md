# Masked Face Recognition System

## Overview
Developed during the COVID-19 pandemic, this project aimed to create a masked face recognition system as part of the IUTT University research team in the Computer Science Department. Our work addressed the unique challenges posed by masks in facial recognition technology. We authored a paper titled ["Masked Face Recognition Using Transfer Learning Approaches"](https://link.springer.com/chapter/10.1007/978-3-031-36670-3_3) detailing the model and results.

## Technologies Used
- Python
- OpenCV
- TensorFlow
- scikit-learn
- PyTorch

## Challenges
We faced difficulties in training models due to limited datasets of masked faces. However, We modified CASIA dataset with more than 50,000 individual face images using [MaskTheFace](https://github.com/aqeelanwar/MaskTheFace) to apply masks to all faces in the dataset. Initially, the model achieved an accuracy of 93% with masked faces but dropped to 85% when tested against unmasked faces. To overcome this, we add [InceptionResnetV1 model](https://github.com/timesler/facenet-pytorch) significantly improving overall performance.

Additionally, the project struggled with recognizing children's faces, highlighting the need for further research in this area.

### Pipeline of Work
Utilize the face detector implemented by [Zekun Wang](https://github.com/waittim/mask-detector/tree/master). This step detect faces and masks within the captured frame.

1. **Face Detection**:
   - Capture a frame from the video stream or a video file.
   - If a face is detected, proceed to the next step. If not, stop processing that frame.

2. **Mask Status Check**:
   - **If Masked**:
     - Use the proposed model to recognize the identity.
   - **If Not Masked**:
     - Use the InceptionResNetV1 model for recognition.

### Key Features
- The codebase supports processing:
  - Live streams
  - Video files
  - Single images
  - Batch images
- The model performs fast, ensuring real-time detection and recognition.

This streamlined pipeline allows for efficient face and mask detection while maintaining high performance across various input formats.
## Live Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/uF2Ww-K6lKM?si=sZD-de2o9RZ746A1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Research Publication
We authored a paper detailing the model and results, which was showcased at the 4th International Conference on Electronics and Signal Processing (ICESP 2023) in China, presented remotely. The paper was subsequently published as part of the book series: Signals and Communication Technology (SCT). If you are curious about our approach you can read the paper [HERE](https://www.researchgate.net/publication/375990864_Masked_Face_Recognition_Using_Transfer_Learning_Approaches).

## Conclusion
This project not only enhanced my technical skills in computer vision and machine learning but also provided valuable insights into the practical applications of technology during a global crisis. The experience underscored the importance of adaptability in model training and the need for diverse datasets.