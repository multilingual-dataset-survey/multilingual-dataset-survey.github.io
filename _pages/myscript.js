
import myArray from '../assets/standardization.json';
buildTable(myArray);

function buildTable(data) {
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++) {

        var row =   `<tr>
                        <td>${data[i].dataset_name}</td>
                        <td>${data[i].title}</td>
                        <td>${data[i].paper_link}</td>
                        <td>${data[i].motivation}</td>
                        <td>${data[i].task_type}</td>
                        <td>${data[i].has_train_data}</td>
                        <td>${data[i].size}</td>
                        <td>${data[i].input_data_source}</td>
                        <td>${data[i].original_language}</td>
                        <td>${data[i].translation}</td>
                        <td>${data[i].label_source}</td>
                        <td>${data[i].publication_year}</td>
                        <td>${data[i].published_venue}</td>
                        <td>${data[i].reused_dataset}</td>
                        <td>${data[i].creators}</td>
                        <td>${data[i].citations}</td>
                        <td>${data[i].in_huggingface}</td>
                    </tr>`
        table.innerHTML += row
    }
}

$(document).ready( function () {
    $('#example').DataTable();
} );
