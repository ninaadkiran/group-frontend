---
toc: true
comments: false
layout: post
title: Table
description: HTML Table
courses: { compsci: {week: 2} }
type: hacks
---

<head>
    <!-- load jQuery and DataTables output style and scripts -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>var define = null;</script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
</head>

<!-- Body contains the contents of the Document -->
<body>
   <table class="table">
    <thead>
        <tr>
            <th>College</th>
            <th>Rank</th>
            <th>Acceptance rate</th>
            <th>Tuition ($)</th>
            <th>Private or Public</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Stanford</td>
            <td>3</td>
            <td>3.9</td>
            <td>56,169</td>
            <td>Private</td>
        </tr>
        <tr>
            <td>Harvard</td>
            <td>2</td>
            <td>4</td>
            <td>55,587</td>
            <td>Private</td>
        </tr>
        <tr>
            <td>UCSD</td>
            <td>34</td>
            <td>34.2</td>
            <td>14,700 (in state)</td>
            <td>Public</td>
        </tr>
        <tr>
            <td>UCLA</td>
            <td>20</td>
            <td>10.8</td>
            <td>13,258 (in state)</td>
            <td>Public</td>
        </tr>
        <tr>
            <td>Perdue</td>
            <td>51</td>
            <td>68.8</td>
            <td>9,992 (in state)</td>
            <td>Public</td>
        </tr>
        <tr>
            <td>Princeton</td>
            <td>1</td>
            <td>4.4</td>
            <td>56,010</td>
            <td>Private</td>
        </tr>
        <tr>
            <td>UCSB</td>
            <td>32</td>
            <td>29.2</td>
            <td>14,417 (in state)</td>
            <td>Public</td>
        </tr>
        <tr>
            <td>Yale</td>
            <td>4</td>
            <td>5.8</td>
            <td>59,950</td>
            <td>Private</td>
        </tr>
    </tbody>
</table>

<!-- Script is used to embed executable code -->
<script>
    $("#demo").DataTable();
</script>