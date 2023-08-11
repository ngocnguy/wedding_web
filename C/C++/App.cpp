#include <iostream>
#include <string>
using namespace std;

class Woman
{
public:
    // thuoc tinh phuong thuc
    std::string fullname;
    float weith;
    
    void makeUp()
    {
     
    }

    void introduce()
        {
            age = 34;
            std::cout<<"I am Woman"<<endl;
            std::cout<<"I am " << age << " years old" << endl;
        }
private:
    int age;
    
};

void sayHello()
{

}
int main()
{
    int x = 10;
    Woman YenNhi; // Cap phat tinh
    Woman *YenNhi2 = new Woman; // Cap phat dong 
    YenNhi2->fullname = "Nhi";
    YenNhi2->introduce();
    std::cout << YenNhi2->fullname << endl;
    return 0;
}
