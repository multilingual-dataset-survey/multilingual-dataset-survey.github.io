---
permalink: /
title: "Multilingual Dataset Survey"
excerpt: ""
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

Welcome to the multilingual dataset survey! You can view our paper,  [Beyond Counting Datasets: A Survey of Multilingual Dataset Construction and Necessary Resources (Yu et al., EMNLP Findings 2022)](files/survey_multilingual_dataset_2022_paper.pdf).

## About this website
This website aims to keep track of the state of multilingual resources and illustrate disparities for future researchers to focus on. To view all the papers we surveyed or to view the full annotation and a description of our annotation scheme, please see [**Full Survey**](https://multilingual-dataset-survey.github.io/full-survey/). 

You can see our real-time analysis at [Colab Analysis](https://multilingual-dataset-survey.github.io/analysis/). 

### How to contribute to the survey 
If you want to modify an existing dataset's entry, or add, or delete a dataset, please see [**Add Dataset**](https://multilingual-dataset-survey.github.io/add_dataset/) to create a pull request in our GitHub repository. 

If you have further questions, please contact us by email ({xyu530,akari}[at]cs.washington.edu,). We are more than happy to assist you in creating a new multilingual dataset as well as helping you to contribute to our survey!

*Note that our focus is on labeled, text-only multilingual NLP datasets in this survey. Unlabeled data such as parallel corpora, machine translation, and multimodal datasets are not included. See the paper for further details on the dataset scope.*

## About our paper 
Our survey examines characteristics of 156 multilingual labeled NLP datasets, each covering at least one non-English language. 

### 1. Large-scale meta-survey on labeled multilingual datasets
We manually annotate how they are created---including input text and label sources and tools used to build them---and what they study---tasks they address and motivations for their creation. We found that low-resource languages often have no or few datasets that are manually annotated, and the motivations of dataasets creations strongly affect how the datasets are collected. 

### 2. Meta-analysis and controlled experiments on MTurk to identify bottlenecks
We also conduct a meta-analysis to understand the core bottlenecks of multilingual dataset creations and controlled experiments on Amazon Mechanical Turk. 

### 3. Macro and micro-level suggestions to the community and practitioners  
Based on that, we provide macro and micro-level suggestions such as funding suggestions, effecitve community collaborations and review guidelines to the NLP community and individual researchers for future multilingual data development. 

More details are in [our paper](files/survey_multilingual_dataset_2022_paper.pdf).
If you think our work is useful, please cite our paper. 

```
@inproceedings{ yu2022counting ,
  title={ Beyond Counting Datasets: A Survey of Multilingual Dataset Construction and Necessary Resources },
  author={ Xinyan Velocity Yu∗,  Akari Asai∗, Trina Chatterjee,
Junjie Hu, Eunsol Choi},
  booktitle={Findings of EMNLP},
  year={ 2022 }
}
```

