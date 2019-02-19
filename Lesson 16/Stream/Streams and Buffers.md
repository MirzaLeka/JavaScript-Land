
**Buffers**
Buffer temporary storage spot for a chunk of data that is being transferred from one place to another.

Imagine we have huge data file, like a video or song, and we want to transfer that file form 
one place to another. Instead of waiting all of it to be transfer, we transfer a little bit
of data at the time using chunks. Each chunk represents a **Buffer**.

We can have one chunk, we can have multiple chunks, depending on size of the data we sending.
The Buffer is filled with data that is passed along the **Stream**.

**Streams**
Stream represents of *stream* of data that flow over time from one place to another.

We are sending data from point A down the **Stream** into **Buffer**. 
Once we fill the **Buffer** we send it down the **Stream** to point B. 
We do the same process for every single chunk (Buffer) until data is been transfered.

The idea is that we can start consuming data before all of the data arrives.
When it comes to __performance__, sending data with streams is much more efficient.

Example of that is watching streams, like movies and games online.

We have three types of streams in NodeJS:
1. Writable streams - allow Node.js to write data to stream
2. Readable streams - allow Node.js to read data from stream
3. Duplex - read and write data to stream

> To work with **Streams** in Node.js we are using **fs** core module.

**Pipe**
Reading data from the Read Stream and writing data to the Write Stream is quite common in Node.js and
because of that we are given Pipes.
Pipe takes data from read stream and pipes it to the write stream automatically.

Benefit is that we don't need to manually listen for events and setup the logic.
Pipe can only be used on Readable streams.

We are **piping** data from the Readable stream to the Writable stream.
