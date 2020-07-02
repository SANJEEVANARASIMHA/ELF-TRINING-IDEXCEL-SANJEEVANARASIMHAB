function sumOfSmallest(a) {

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
        return a[0]+a[1];
}

		

        var aa=[1,5,2,4,10];
        var a=sumOfSmallest(aa);
        console.log(a);
        