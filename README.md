**Smart House**

תרגיל : בניית בית חכם  
מערכת בית חכם הינה אפליקציה אשר מנוהלת ע"י טלפון המשתמש ומאפשרת לו לשלוט במכשירים הקיימים בבית. בנוסף מערכת זו תאפשר למשתמש להוסיף חדרים לבית + להוסיף מכשירים לכל חדר.

יכולות האפליקציה-  
1\. המשתמש יוכל להוסיף חדרים לבית שלו  
סוגי החדרים הינם  
א. חדר שינה,  
ב. חדר אמבטיה / שירותים  
ג. מטבח  
<br/>2\. לכל חדר המשתמש יוכל להוסיף את המכשירים הבאים  
א. מזגן  
ב. מנורה  
ג. מערכת סטריאו  
ד. דוד

מסך הבית

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8BAwAIvgLf3C5x0AAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8/AwAI/AL+GwXmLwAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8uAwAIuALceF8VrQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8eAwAIugLdpL9UBwAAAABJRU5ErkJggg==)

מסך הבית הינו המסך הראשי של האפליקציה.  
מסך זה כולל כותרת smart house וכפתור +.  
לחיצה על כפתור + תאפשר למשתמש להוסיף חדר חדש.  
<br/>

חלון הוספת החדרים יראה באופן הבא  

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8DAwAI3gLvJb+bdQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8lAwAI0ALoHSgvegAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8bAwAI6gL1r4796gAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//82AwAItALazBebVQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8GAwAIrgLXC3RkHAAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//83AwAI9AL6IZQ96QAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8zAwAI5ALyxyYyuAAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8+AwAIvALe9oZAkwAAAABJRU5ErkJggg==)

בחר חדר חדש

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8xAwAIxALidUN1FQAAAABJRU5ErkJggg==)

**צור**

חלון הוספת חדרים יהיה בערוץ חדש בשם /addroom.  
לעמוד זה יש כותרת קבועה של smart house  
אלמנט select . ו2 שדות טקסט  
אלמנט "בחר חדר חדש" – יהיה מסוג select ויאפשר למשתמש לבחור בין כמה ערכים  
\* חדר שינה , חדר אמבטיה/שירותים , מטבח.  
אלמנט "שם החדר" יהיה אינפוט אשר יוגבל ל9 תווים ויאפשר לתת שם חדש לחדר.  
אלמנט "צבע החדר" יהיה אינפוט אשר יקלוט ערך של צבע.  
<br/>כפתור צור – יבדוק שאכן נבחר חדר ושניתן לפחות תו אחד ב"שם החדר". במידה ולא יופיע alert עם הערך ERROR.  
מיד לאחר הלחיצה המערכת תחזיר את המשתמש לעמוד הראשי גם אם נרשמה שגיאה!  
\*במידה והיית שגיאה המערכת לא תיצור חדר חדש במערכת.

מסך הבית לאחר יצירה של כמה חדרים

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8FAwAIzgLnVJKFDQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8fAwAI+gL9STzyuwAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8KAwAIpgLTxaqbyQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//89AwAI3ALuqWChggAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8rAwAI6AL0c268QAAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8VAwAI0gLpwchu0AAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8TAwAI4gLxlR8mLAAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8LAwAI5gLzKCk9dQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8RAwAIwgLhJ3phgQAAAABJRU5ErkJggg==)

בדוגמא זו ניתן לראות את מסך הבית עם 3 ריבועים בצבעים שונים.  
כל ריבוע מציין חדר שנוסף ע"י המשתמש.  
האות בפנים מציינת את שם החדר שניתן לו. וצבע הרקע מתאר את הצבע שניתן לו.  
בעת לחיצה על כל אחד מהריבועים יפתח החלון הבא –

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//85AwAIzALmT9Ku0wAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8vAwAI+AL8ldyzEQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8NAwAI1gLrfP51iQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//86AwAIrALWEDRPwgAAAABJRU5ErkJggg==)

שם החדר: A  
סוג החדר: אמבטיה

חלון חדר יהיה בערוץ נפרד בשם /room.

\*\*אתגר – חלון חדר יהיה בערוץ בשם שם החדרּ+room

לדוגמה בכניסה לחדר A נעבור לערוץ /roomA

בכניסה לחדר eli נעבור לחדר /roomeli  
בחלון זה תיהיה כותרת קבועה עם הערך smart house  
שם החדר  
סוג החדר  
\* ערכים אלו יקבעו לפי ערכי המשתמש.  
<br/>

כפתור "הוסף מוצר" יפתח באותו עמוד אזור נוסף אשר יאפשר הוספה של מוצרים חדשים.  
המשך העמוד יראה כך:

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//81AwAI1ALqk/F6RAAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8qAwAIqALUnu0a/AAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8hAwAIwALg+5ogKwAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8JAwAIxgLjmkx62AAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8nAwAI8AL4r01o1wAAAABJRU5ErkJggg==)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8yAwAIpALSKqWUBAAAAABJRU5ErkJggg==)

\*אזור זה יהיה באותו עמוד של החדר עצמו ולא יעבור לעמוד חדש!  
אזור זה בנוי מ2 אלמנטים  
1\. אלמנט select אשר מציג את האפשרויות מזגן, דוד, מערכת סטריאו ומנורה.  
2\. כפתור הוסף – לחיצה על כפתור הוסף תעלים את שדה "בחר מוצר" ואת כפתור "הוסף".  
תבדוק איזה מוצר נבחר ותוסיף אותו לאותו חדר  
\* בכל חדר יהיה מקסימום מערכת סטריאו אחת.  
\* דוד יהיה ניתן להוסיף רק בחדר אמבטיה (אין הגבלה לכמות)  
\* בכל חדר יהיו מקסימום 5 מוצרים.  
<br/>במידה ויש בעיה ולא ניתן לייצר את המוצר המערכת תזרוק הודעה שגיאה בalert עם ERROR.  
\*אין צורך לפרט את הבעיה בalert.  
<br/>דוגמא לעמוד "חדר" לאחר הוספת מוצרים

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8dAwAI2gLt+1m1FgAAAABJRU5ErkJggg==)

Smart house

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8XAwAI8gL5c60pfQAAAABJRU5ErkJggg==)

מנורה

מנורה

שם החדר: A  
סוג החדר: אמבטיה

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8pAwAIyALkwQv77QAAAABJRU5ErkJggg==)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8ZAwAIygLlHeu6RwAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8jAwAI4ALwSf9nhgAAAABJRU5ErkJggg==)

בדוגמא זו ניתן לראות את עמוד חדר לאחר הוספה של 3 מוצרים.  
2 מנורות ומערכת סטריאו.  
לחיצה על כל ריבוע של מוצר ישנה את הרקע שלו מאדום לירוק ולהיפך.  
\* מתאר אם המוצר כרגע דולק או מכובה.  
<br/>\*\* יש לשים לב שכניסה לחדר לא תאפס את מצב המוצרים.  
\* כל מוצר כברירת מחדל יהיה מכובה לאחר יצירתו.

בהצלחה 😊