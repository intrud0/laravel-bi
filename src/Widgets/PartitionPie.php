<?php

namespace LaravelBi\LaravelBi\Widgets;

class PartitionPie extends BaseWidget
{
    protected $component = 'partition-pie';

    protected $colors;

    public function colors(array $colors): self
    {
        $this->colors = $colors;

        return $this;
    }

    protected function extra()
    {
        return [
            'metric'    => $this->metrics->get(0),
            'dimension' => $this->dimensions->get(0),
            'colors'    => $this->colors
        ];
    }
}
