#include <stdio.h>

void bubbleSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int my_array[] = {64, 34, 25, 12, 22, 11, 90};
    int array_size = sizeof(my_array) / sizeof(my_array[0]);

    printf("Original Array:\n");
    for (int i = 0; i < array_size; i++) {
        printf("%d ", my_array[i]);
    }

    // Sort the array in ascending order using Bubble Sort
    bubbleSort(my_array, array_size);

    printf("\nArray in Ascending Order:\n");
    for (int i = 0; i < array_size; i++) {
        printf("%d ", my_array[i]);
    }

    return 0;
}