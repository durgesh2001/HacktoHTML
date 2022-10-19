#include <stdio.h>

int main()
{

    int choice;
    float USD, Rup, Euro, Yean, Cel, feh, kel, KM, CM, M, MM;
    int inputC, inputT, inputD;

    printf("***** Welcome to the Converter ***** \n\n");
    printf("Type 1 for Currency convertor \n");
    printf("Type 2 for Temperature convertor \n");
    printf("Type 3 for Distance convertor \n");

    scanf("%d", &choice);

    if (choice == 1)
    {
        printf("Type 1 for USD to Rupee \n");
        printf("Type 2 for USD to Euro \n");
        printf("Type 3 for USD to Yean \n");
        scanf("%d", &inputC);

        printf("Enter USD anount to convert \n");
        scanf("%f", &USD);

        if (inputC == 1)
        {
            Rup = USD * 80;
            printf(" %f USD in rupees = %f ", USD, Rup);
        }
        else if (inputC == 2)
        {
            Euro = USD * 0.98;
            printf(" %f USD in Euro  = %f ", USD, Euro);
        }
        else if (inputC == 3)
        {
            Yean = USD * 6.7;
            printf(" %f USD in Yean = %f ", USD, Yean);
        }
    }
    else if (choice == 2)
    {
        printf("Type 1 for Celsius to Feh \n");
        printf("Type 2 for Celsius to Kelvi \n");
        scanf("%d", &inputT);

        printf("Enter Temperature in celsius \n");
        scanf("%f", &Cel);

        if (inputT == 1)
        {
            feh = (Cel * 1.8) + 32;
            printf("%f celsius to feh = %f", Cel, feh);
        }
        else if (inputT == 2)
        {
            kel = Cel + 273;
            printf("%f celsius in kelvin = %f", Cel, kel);
        }
    }
    else if (choice == 3)
    {
        printf("Type 1 for Km to m \n");
        printf("Type 2 for Km to cm \n");
        scanf("%d", &inputD);

        printf("Enter distance in km \n");
        scanf("%f", KM);

        if (inputD == 1)
        {
            M = KM * 1000;
            printf("%f KM in M = %f", KM, M);
        }
        else if (inputD == 2)
        {
            CM = KM * 100000;
            printf("%f KM in M = %f", KM, CM);
        }
    }
    else
    {
        printf("Invalid input");
    }
}