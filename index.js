document.addEventListener("DOMContentLoaded", function () {
    const siblingsTable = document.getElementById("siblings-table");
    const addSiblingButton = document.getElementById("add-sibling");

    addSiblingButton.addEventListener("click", function () {
        const newRow = siblingsTable.insertRow();
        newRow.innerHTML = `
            <td>${siblingsTable.rows.length}</td>
            <td><button class="remove-sibling">−</button></td>
            <td><input type="text" name="sibling_name[]"></td>
            <td><input type="text" name="sibling_relation[]"></td>
            <td><input type="text" name="sibling_code[]"></td>
            <td><input type="text" name="sibling_age[]"></td>
            <td><input type="text" name="sibling_class[]"></td>
            <td><input type="text" name="sibling_section[]"></td>
            <td><input type="text" name="sibling_school[]"></td>
            <td><input type="text" name="sibling_other_school[]"></td>
        `;

        // Add event listener for removing sibling rows
        const removeSiblingButton = newRow.querySelector(".remove-sibling");
        removeSiblingButton.addEventListener("click", function () {
            siblingsTable.deleteRow(newRow.rowIndex);
            updateSerialNumbers();
        });

        updateSerialNumbers();
    });

    function updateSerialNumbers() {
        for (let i = 0; i < siblingsTable.rows.length; i++) {
            const row = siblingsTable.rows[i];
            row.cells[0].textContent = i + 1;
        }
    }
});
