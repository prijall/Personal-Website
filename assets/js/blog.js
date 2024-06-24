// Select the main blog table container
const blogTable = document.querySelector(".main");

// Define the array of blog objects
const blog = [
  {
    title: "A Batch Normalized Inference Network Keeps the KL Vanishing Away",
    authors: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu",
    conferences: "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2020,
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    },
    abstract: "This is currently left empty and this can be considered as a dummy data 1"
  },
  {
    title: "A Call for More Rigor in Unsupervised Cross-lingual Learning",
    authors: "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre",
    conferences: "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2020,
    image: "assets/images/research-page/crossLingual.png",
    citation: {
      vancouver: "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    },
    abstract: "This is currently left empty and this can be considered as a dummy data 2"
  },
  {
    title: "A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks",
    authors: "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis",
    conferences: "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2020,
    image: "assets/images/research-page/wordRepresentation.png",
    citation: {
      vancouver: "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    },
    abstract: "This is currently left empty and this can be considered as a dummy data 3"
  },
  {
    title: "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
    authors: "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
    conferences: "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2020,
    image: "assets/images/research-page/dialogueState.png",
    citation: {
      vancouver: "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    },
    abstract: "This is currently left empty and this can be considered as a dummy data 4"
  },
  {
    title: "Dual Super-Resolution Learning for Semantic Segmentation",
    authors: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
    conferences: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    image: "assets/images/research-page/semanticSegmentation.png",
    citation: {
      vancouver: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
    },
    abstract: "This is currently left empty and this can be considered as a dummy data 5"
  },
  {
    title: "Deep Unfolding Network for Image Super-Resolution",
    authors: "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
    conferences: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    image: "assets/images/research-page/deepNetwork.png",
    citation: {
      vancouver: "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
    },
    abstract: "This is currently left empty and this can be considered as a dummy data 6"
  },
  {
    title: "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
    authors: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
    conferences: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    image: "assets/images/research-page/imageDecomposition.png",
    citation: {
      vancouver: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
    },
    abstract: "This is currently left empty and this can be considered as a dummy data 7"
  },
  {
    title: "Forward and Backward Information Retention for Accurate Binary Neural Networks",
    authors: "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
    conferences: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    image: "assets/images/research-page/neuralNetworks.jpg",
    citation: {
      vancouver: "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
    },
    abstract: "This is currently left empty and this can be considered as a dummy data 8"
  }
];

// Initialize AOS (Animate On Scroll)
AOS.init();

// Function to open a research page with the provided data
function openResearch(title, authors, conference, image, abstract, citation) {
  const url = new URL('research1.html', window.location.origin);
  url.searchParams.set('title', title);
  url.searchParams.set('authors', authors);
  url.searchParams.set('conference', conference);
  url.searchParams.set('image', image);
  url.searchParams.set('abstract', abstract);
  url.searchParams.set('citation', citation);
  window.location.href = url.toString();
}

// Function to populate the blog table with data
const fillData = () => {
  let output = "";

  blog.forEach(({ image, title, authors, conferences, researchYr, citation, abstract }, index) => {
    output += `
      <tr data-aos="zoom-in-left" class="research-card"> 
        <td class="imgCol"><img src="${image}" class="rImg" alt="Research Image"></td>
        <td class="researchTitleName">
          <div class="img-div">
            <span class="imgResponsive">
              <img src="${image}" class="imgRes" alt="Research Image">
            </span>
          </div>
          <a href="#" class="paperTitle">${title}</a>
          <div class="authors">${authors}</div>
          <div class="rConferences">${conferences}
            <div class="researchY">${researchYr}</div>
          </div>
          <div class="additional-content" style="display: none;">
            <div class="abstract">${abstract}</div>
            <div class="citation">${citation.vancouver}</div>
          </div>
        </td>
      </tr>`;
  });

  blogTable.innerHTML = output;

  // Add event listeners to each research card
  document.querySelectorAll('.research-card').forEach((card, index) => {
    const { title, authors, conferences, image, abstract, citation } = blog[index];
    card.addEventListener('click', () => {
      openResearch(title, authors, conferences, image, abstract, citation.vancouver);
    });
  });
};

document.addEventListener("DOMContentLoaded", fillData);
