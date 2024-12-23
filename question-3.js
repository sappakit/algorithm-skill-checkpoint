/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: O(n)
        โดยดูจากกระบวนการทำงานที่มี Time complexity สูงสุด 1 ตัว คือ Linear search ซึ่งมีค่าเท่ากับ O(n)


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: O(log n)
        โดยดูจากกระบวนการทำงานที่มี Time complexity สูงสุด 1 ตัว คือ Binary search ซึ่งมีค่าเท่ากับ O(log n)


*/

/* 
Which function is more efficient and why?
Answer: ฟังก์ชัน findProductPrice จะมีประสิทธิภาพมากกว่า
        เนื่องจาก Binary search เป็นทำงานโดยการแบ่งครึ่ง Array ไปเรื่อย ๆ
        ทำให้จำนวนครั้งในการตรวจสอบน้อยกว่า จากการที่ไม่ต้องตรวจสอบสมาชิกทุกตัว
        ถึงแม้จำนวนของข้อมูลจะมากขึ้น จำนวนรอบการทำงานก็จะไม่ได้เพิ่มขึ้นมากนัก
        ซึ่งต่างจาก Linear search ที่จะต้องมีการตรวจสอบสมาชิกทุกตัวเรียงลำดับไปเรื่อย ๆ
        ยิ่งข้อมูลมาก ยิ่งมีจำนวนรอบการทำงานมาก
*/
