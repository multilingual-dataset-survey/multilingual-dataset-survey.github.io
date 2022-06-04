---
layout: archive
title: "Add Dataset"
permalink: /add_dataset/
author_profile: false
---

# Add a new dataset to the survey
1. Add a new json object at the end of `assets/standardization.json`
2. Make sure your json object contains the following field:
```
{
    "dataset_name": <dataset name (could be identical to paper title)>, 
    "title": <paper title>, 
    "paper_link": <paper link>, 
    "data_link": <link to download the data>, # If your data is not public, don't include this field
    "motivation": {'task-oriented (target language)','cross-lingual transfer','task-oriented (multilingual)''multi-task (target language)'}, "task_type": {'classification (sentiment analyis)', 'classification (sentence pair)', 'classification (other)', 'QA (w/ retrieval)', 'QA (machine reading)', 'structured prediction', 'sequence tagging', 'generation (summarization)', 'generation (other)', 'other'}, 
    "has_train_data": {'YES'/'NO'}, 
    "size": {'<100'/'100~1000'/'1000~10K'/'>10K'}, 
    "input_data_source": {'annotated (authors, linguists)', 'commercial sources', 'crowdsourced', 'curated linguistic resources (wordnet, etc)', 'curated source (exams, scientific papers.etc)', 'media', 'template-based', 'web', 'Wikipedia'}, # If your data has multiple input sources, please use '&' to connect all of them
    "original_language": {'English', 'in its own language', 'both'}
    "translation": {'YES'/'NO'}, 
    "label_source": {'Annotated (authors, linguists)', 'Automatically induced', 'Crowdsourced','Derived from linguistic resources (wordnet, etc)'}, # If your data has multiple label sources, please use '&' to connect all of them
    "publication_year": <public year>, 
    "published_venue": <published venue>, 
    "reused_dataset": {'YES (English)' / 'YES (other language)' / 'NO'}, 
    "creators": {'combination of university and industry', 'university', 'industry', 'individual researchers'}, 
    "citations": <your current citation>, 
    "in_huggingface": {'YES'/'NO'}
}
```
3. Create a new pull request at [our github repository](https://github.com/multilingual-dataset-survey/multilingual-dataset-survey.github.io) with prefix: "New Dataset" with your dataset name. 

# Modify an existing dataset's entry in the survey
1. Find the existing dataset's entry in `assets/standardization.json` that you want to correct
2. Modify the json object and make sure your object follows the above scheme
3. Create a new pull request at [our github repository](https://github.com/multilingual-dataset-survey/multilingual-dataset-survey.github.io) with prefix: "Modify Existing Dataset" with your dataset name, and state the reason that you need to make such modification in the PR description. 
