function ascendingArray(a) {

    var temp;
		for (let i = 0; i <a.length; i++)
		{
			for (let j = i+1; j < a.length; j++)
			{
				if(a[i]>a[j])
				{
					temp=a[j];
					a[j]=a[i];
					a[i]=temp;
				}
			}
        }
        return a;
}

		

        var aa=[1,5,2,4,10];
        var a=ascendingArray(aa);
        console.log(a);
        