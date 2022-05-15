// app.component.ts
import { Component } from '@angular/core';
import jspdf from 'jspdf';

import 'jspdf-autotable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    header = [['ID', 'Name', 'Email', 'Profile']]

    tableData = [
        [1, 'Bhuban', 'accesszombiescode@gmail.com', 'HR'],
        [2, 'rinkesh', 'rinkesh@yahoo.com', 'Sales'],
        [3, 'arpit', 'arpit@yahoo.com', 'Sales'],
        [4, 'harsh', 'harsh@yahoo.com', 'Sales'],
        [5, 'aashivadit', 'aashivadit@yahoo.com', 'Sales'],
        [6, 'abdul', 'abdul@yahoo.com', 'Sales'],
        [7, 'Angel', 'angel@yahoo.com', 'Marketing'],
        [8, 'Harry', 'harry@yahoo.com', 'Finance']
    ]

    generatePdf() {
        var pdf = new jspdf();

        pdf.setFontSize(20);
        pdf.text('PDF File in Angular By Access Zombies Code', 11, 8);
        pdf.setFontSize(12);
        pdf.setTextColor(99);


        (pdf as any).autoTable({
        head: this.header,
        body: this.tableData,
        theme: 'plain',
        didDrawCell: (data: { column: { index: any; }; }) => {
            console.log(data.column.index)
        }
        })

        // Open PDF document in browser's new tab
        pdf.output('dataurlnewwindow')

        // Download PDF doc  
        pdf.save('table.pdf');
    }  

}