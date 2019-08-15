# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName AS [Product], CategoryName AS [Category] FROM [Products] LEFT JOIN [Categories] ON [Products].CategoryID = [Categories].CategoryID;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderID AS [Order ID], ShipperName AS [Shipper name] FROM [Orders] LEFT JOIN [Shippers] ON [Orders].ShipperID = [Shippers].ShipperID WHERE [Orders].OrderDate < "1997-01-09";

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName as [Product Name], Quantity FROM [Products] LEFT JOIN [OrderDetails] ON [Products].ProductID = [OrderDetails].ProductID WHERE [OrderDetails].OrderID = 10251 ORDER BY [Product Name] ASC;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderID as [Order ID], [Customers].CustomerName as [Customer Name], [Employees].LastName as [Employees Last Name] FROM [Orders] LEFT JOIN [Customers] ON [Orders].CustomerID = [Customers].CustomerID LEFT JOIN [Employees] ON [Orders].EmployeeID = [Employees].EmployeeID;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT CategoryName AS [Categories], COUNT(*) AS [Count] FROM [Products] JOIN [Categories] ON [Products].CategoryID = [Categories].CategoryID GROUP BY [Categories];

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

SELECT OrderID AS [Order ID], Count(*) AS [Item Count] FROM [OrderDetails] GROUP BY [Order ID];