📘 Database Fundamentals – Conceptual Understanding
1. Why is db.json not suitable as a database for real projects?
A.Using a simple JSON file (like db.json) for storage works only for small demos or prototypes. Real applications require much stronger guarantees.

 =>Limitations of File-Based Storage:
    🔸 No query engine – You must manually read/write the entire file since there's no indexing or query optimization.
    🔸 No real concurrency – If two users try to write at the same time, the file can easily get corrupted.
    🔸 No transactions – You can't guarantee atomic operations (e.g., money transfer, order placement).
    🔸 Full-file operations – Every update rewrites the entire file, making it slow.

 =>Performance Issues:
    *Slow reads/writes as the file grows
    *No indexing → searches become slower (O(n))
 =>Scalability Issues:
    *Cannot handle large datasets
    *Cannot support many users simultaneously
    *Cannot distribute the data across servers
 =>Reliability Issues:
    *High chance of corruption if the server crashes during write
    *No automatic backups or replication
    *No data recovery mechanisms

Conclusion:
     db.json is good for learning and small mock projects, but not suitable for production due to poor performance, no concurrency control, low reliability, and zero scalability.


Q2.Ideal Characteristics of a Database System (Beyond Storage)
A.A good database system offers much more than just saving data.
   🔹 Performance:
          Efficient reads and writes, fast queries, and optimized indexing.
    🔹 Concurrency:
          Multiple users can read/write simultaneously without corrupting data.
    🔹 Reliability:
         Data remains safe even if system crashes — thanks to logging, backups, and recovery.
    🔹 Data Integrity:
        Ensures accuracy and consistency using:
           *Constraints
           *Schema validation
           *Transactions
    🔹 Scalability:
        Able to grow as the application grows:
            *Vertical scaling (better hardware)
            *Horizontal scaling (more servers)
    🔹 Fault Tolerance:
         Continues working even if parts of the system fail:
              *Replication
              *Clustering
              *Automatic failover

These characteristics make databases dependable for real-world applications.

Q3.Types of Databases and Their Use Cases
A.There are two main categories of databases:
     A. Relational Databases (SQL)
        Examples: MySQL, PostgreSQL, SQL Server, Oracle
        =>Features:
           *Structured data
           *Tables with rows and columns
           *Strong ACID transactions
           *Relationships via foreign keys
        =>Use Cases:
            a.E-commerce Ex:Orders, payments, inventory
            b.Banking	Ex:Transactions, customer accounts
            c.ERP/CRM systems	Ex:Business records
            d.Government dashboards	Ex:Citizen data management

Relational DBs are ideal when data is structured, consistency is critical, and relationships matter.

    B. Non-Relational Databases (NoSQL)
         Types of NoSQL:
             a.Document DBs (MongoDB)
             b.Key-Value Stores (Redis)
             c.Wide-Column Stores (Cassandra)
             d.Graph Databases (Neo4j)

    NoSQL is best when you need:
       =>High scalability
       =>Fast reads/writes
       =>Flexible schema
       =>Distributed systems